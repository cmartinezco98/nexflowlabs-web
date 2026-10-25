import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const componentDirectory = path.join(projectRoot, "src/components/figma");
const outputFile = path.join(projectRoot, "src/app/figma-utilities.css");
const components = (await readdir(componentDirectory)).filter((file) => file.endsWith(".tsx"));
const classes = new Set();

for (const component of components) {
  const source = await readFile(path.join(componentDirectory, component), "utf8");
  for (const [, value] of source.matchAll(/className="([^"]*)"/g)) {
    value.split(/\s+/).filter(Boolean).forEach((className) => classes.add(className));
  }
}

const cssEscape = (value) =>
  `.${value.replace(/[^a-zA-Z0-9_-]/g, (character) => `\\${character.codePointAt(0).toString(16)} `)}`;

const declarationsFor = (className) => {
  const declarations = [];
  const add = (property, value) => declarations.push(`${property}: ${value}`);
  const spacing = /^(p|px|py|pt|pb|pl|pr|mb|mr)-(.+)$/u.exec(className);

  if (className === "absolute" || className === "relative") add("position", className);
  else if (className === "block") add("display", "block");
  else if (className === "flex") add("display", "flex");
  else if (className === "grid") add("display", "grid");
  else if (className === "contents") add("display", "contents");
  else if (className === "flex-col") add("flex-direction", "column");
  else if (className === "flex-wrap") add("flex-wrap", "wrap");
  else if (className === "flex-[1_0_0]") add("flex", "1 0 0");
  else if (className === "shrink-0") add("flex-shrink", "0");
  else if (className === "content-stretch") add("align-content", "stretch");
  else if (className === "content-center") add("align-content", "center");
  else if (className.startsWith("items-")) add("align-items", className.slice(6));
  else if (className.startsWith("justify-self-")) add("justify-self", className.slice(13));
  else if (className.startsWith("justify-")) add("justify-content", className.slice(8));
  else if (className.startsWith("self-")) add("align-self", className.slice(5));
  else if (className === "isolate") add("isolation", "isolate");
  else if (className === "pointer-events-none") add("pointer-events", "none");
  else if (className === "not-italic") add("font-style", "normal");
  else if (className === "font-bold") add("font-weight", "700");
  else if (className === "font-semibold") add("font-weight", "600");
  else if (className === "font-medium") add("font-weight", "500");
  else if (className === "font-normal") add("font-weight", "400");
  else if (className === "uppercase") add("text-transform", "uppercase");
  else if (className === "underline") add("text-decoration-line", "underline");
  else if (className === "text-center") add("text-align", "center");
  else if (className === "text-right") add("text-align", "right");
  else if (className.startsWith("whitespace-")) {
    const value = className.slice(11);
    add("white-space", value === "pre-wrap" ? "pre-wrap" : value);
  } else if (className === "mix-blend-luminosity") add("mix-blend-mode", "luminosity");
  else if (className === "bg-clip-text") {
    add("background-clip", "text");
    add("-webkit-background-clip", "text");
  } else if (className === "bg-clip-padding") add("background-clip", "padding-box");
  else if (className === "overflow-clip" || className === "overflow-hidden" || className === "overflow-auto") {
    add("overflow", className.slice(9));
  } else if (className === "max-w-none") add("max-width", "none");
  else if (className === "min-w-px") add("min-width", "1px");
  else if (className === "min-h-px") add("min-height", "1px");
  else if (className === "border-0") add("border-width", "0");
  else if (className === "border-solid") add("border-style", "solid");
  else if (className === "border-t") add("border-top-width", "1px");
  else if (className === "decoration-solid") add("text-decoration-style", "solid");
  else if (className === "bg-gradient-to-r") {
    add("background-image", "linear-gradient(to right, var(--figma-gradient-from, transparent), var(--figma-gradient-via, transparent) var(--figma-gradient-via-position, 50%), var(--figma-gradient-to, transparent))");
  } else if (className === "via-1/2") add("--figma-gradient-via-position", "50%");
  else if (className === "-translate-x-1/2") add("--figma-translate-x", "-50%");
  else if (className === "-translate-y-1/2") add("--figma-translate-y", "-50%");
  else if (className === "bg-transparent" || className === "text-transparent") add(className.startsWith("bg-") ? "background-color" : "color", "transparent");
  else if (className.startsWith("font-['")) {
    const fontName = className.slice(7, -2).split(":")[0].replaceAll("_", " ");
    const fallback = fontName.includes("Mono") ? "monospace" : "sans-serif";
    add("font-family", `"${fontName}", ${fallback}`);
  } else if (spacing) {
    let value = spacing[2].replaceAll("_", " ");
    if (value.startsWith("[-") && value.endsWith("]")) value = `-${value.slice(2, -1)}`;
    const props = {
      p: ["padding"],
      px: ["padding-left", "padding-right"],
      py: ["padding-top", "padding-bottom"],
      pt: ["padding-top"],
      pb: ["padding-bottom"],
      pl: ["padding-left"],
      pr: ["padding-right"],
      mb: ["margin-bottom"],
      mr: ["margin-right"],
    }[spacing[1]];
    for (const property of props) add(property, value.startsWith("[") ? value.slice(1, -1) : value);
  } else if (/^(top|right|bottom|left|inset)-/.test(className)) {
    const [axis, rawValue] = className.split(/-(.+)/u).slice(0, 2);
    const fractions = { "1/2": "50%", "1/4": "25%" };
    let value = fractions[rawValue] ?? rawValue;
    if (value.startsWith("[")) value = value.slice(1, -1).replaceAll("_", " ");
    const property = axis === "inset" ? "inset" : axis;
    add(property, value);
  } else if (className === "top-0" || className === "right-0" || className === "bottom-0" || className === "left-0") {
    add(className.slice(0, className.lastIndexOf("-")), "0");
  } else if (/^(?:min-w|min-h|max-w|size|w|h)-/.test(className)) {
    const prefix = ["min-w", "min-h", "max-w", "size", "w", "h"].find((candidate) => className.startsWith(`${candidate}-`));
    const rawValue = className.slice(prefix.length + 1);
    const value = rawValue === "full" ? "100%" : rawValue === "px" ? "1px" : rawValue.slice(1, -1).replaceAll("_", " ");
    const properties = {
      w: ["width"], h: ["height"], size: ["width", "height"],
      "min-w": ["min-width"], "min-h": ["min-height"], "max-w": ["max-width"],
    }[prefix];
    for (const property of properties) add(property, value);
  } else if (className.startsWith("gap-x-") || className.startsWith("gap-y-") || className.startsWith("gap-")) {
    const axis = className.startsWith("gap-x-") ? "column-gap" : className.startsWith("gap-y-") ? "row-gap" : "gap";
    const rawValue = className.slice(axis === "column-gap" ? 6 : axis === "row-gap" ? 6 : 4);
    add(axis, rawValue.startsWith("[") ? rawValue.slice(1, -1) : rawValue);
  } else if (className.startsWith("grid-cols-")) {
    add("grid-template-columns", className.slice(11, -1).replaceAll("_", " "));
  } else if (className.startsWith("grid-rows-")) {
    add("grid-template-rows", className.slice(11, -1).replaceAll("_", " ").trim());
  } else if (className.startsWith("col-[")) add("grid-column", className.slice(5, -1).replaceAll("_", " "));
  else if (className === "col-1") add("grid-column", "1");
  else if (className === "col-2") add("grid-column", "2");
  else if (className === "row-1") add("grid-row", "1");
  else if (className === "row-2") add("grid-row", "2");
  else if (className.startsWith("max-w-[")) add("max-width", className.slice(7, -1));
  else if (className.startsWith("min-w-[")) add("min-width", className.slice(7, -1));
  else if (className.startsWith("min-h-[")) add("min-height", className.slice(7, -1));
  else if (className.startsWith("max-h-[")) add("max-height", className.slice(7, -1));
  else if (className.startsWith("text-[#") || className.startsWith("text-[rgba") || className.startsWith("text-[transparent]")) {
    add("color", className.slice(6, -1));
  } else if (className.startsWith("text-[")) add("font-size", className.slice(6, -1));
  else if (className.startsWith("bg-[#") || className.startsWith("bg-[rgba")) add("background-color", className.slice(4, -1));
  else if (className.startsWith("border-[")) add("border-color", className.slice(8, -1));
  else if (className.startsWith("from-[#")) add("--figma-gradient-from", className.slice(6, -1));
  else if (className.startsWith("via-[#")) add("--figma-gradient-via", className.slice(5, -1));
  else if (className.startsWith("via-[rgba")) add("--figma-gradient-via", className.slice(5, -1));
  else if (className.startsWith("to-[#")) add("--figma-gradient-to", className.slice(4, -1));
  else if (className.startsWith("tracking-[")) add("letter-spacing", className.slice(10, -1));
  else if (className.startsWith("leading-[")) add("line-height", className.slice(9, -1));
  else if (className.startsWith("rounded-tl-[")) add("border-top-left-radius", className.slice(12, -1));
  else if (className.startsWith("rounded-tr-[")) add("border-top-right-radius", className.slice(12, -1));
  else if (className === "rounded-inherit") add("border-radius", "inherit");
  else if (className.startsWith("rounded-[")) add("border-radius", className.slice(9, -1));
  else if (className.startsWith("rounded-")) add("border-radius", className.slice(8));
  else if (className.startsWith("blur-[")) add("filter", `blur(${className.slice(6, -1)})`);
  else if (className.startsWith("backdrop-blur-[")) add("backdrop-filter", `blur(${className.slice(15, -1)})`);
  else if (className.startsWith("shadow-[")) add("box-shadow", className.slice(8, -1).replaceAll("_", " "));
  else if (className.startsWith("drop-shadow-[")) add("filter", `drop-shadow(${className.slice(13, -1).replaceAll("_", " ")})`);
  else if (className.startsWith("opacity-")) add("opacity", Number(className.slice(8)) / 100);
  else if (className.startsWith("z-[")) add("z-index", className.slice(3, -1));
  else if (className.startsWith("decoration-[#")) add("text-decoration-color", className.slice(12, -1));
  else if (className.startsWith("decoration-[")) add("text-decoration-thickness", className.slice(12, -1));
  else if (className.startsWith("[")) {
    const customProperty = /^\[([^:]+):(.+)\]$/u.exec(className);
    if (customProperty) add(customProperty[1], customProperty[2]);
  }

  return declarations;
};

const rules = [];
const unhandled = [];

for (const className of [...classes].sort()) {
  if (className.startsWith("figma-artboard")) continue;
  const declarations = declarationsFor(className);
  if (declarations.length) rules.push(`${cssEscape(className)} { ${declarations.join("; ")}; }`);
  else unhandled.push(className);
}

const pageStyles = `
.figma-artboard { width: 100%; min-height: 100vh; overflow: hidden; background: #0e141c; }
.figma-artboard p, .figma-artboard h1, .figma-artboard h2, .figma-artboard h3, .figma-artboard h4 { margin: 0; }
.figma-artboard img { display: block; }
.figma-artboard--core { width: min(100%, 1312px); margin-inline: auto; }
.figma-artboard--modulos { width: min(100%, 1119px); margin-inline: auto; }
.figma-artboard--cotizador { width: min(100%, 1280px); margin-inline: auto; }
.figma-artboard--core > .site-header { max-width: 1280px; margin-inline: auto; }
.figma-artboard--modulos > .site-header { max-width: 1063px; margin-inline: auto; }
.figma-artboard--cotizador [data-node-id="1:4293"] { width: 100%; max-width: 100%; }
.figma-artboard--cotizador [data-node-id="1:4294"] { font-size: 28px; letter-spacing: 0.5px; flex-shrink: 1; }
.figma-artboard--cotizador [data-node-id="1:4299"] { flex-wrap: wrap; gap: 8px; }
@media (max-width: 760px) {
  .figma-artboard--core [class~="w-[1280px]"],
  .figma-artboard--modulos [class~="w-[1087px]"] { width: 100%; }
  .figma-artboard--modulos > .site-header { max-width: 100%; }
  .figma-artboard--core > .site-header { max-width: 100%; }

  .figma-artboard [class*="w-["] { max-width: 100%; }
  .figma-artboard [class~="px-[48px]"] { padding-inline: 20px; }
  .figma-artboard [class~="p-[40px]"] { padding: 20px; }
  .figma-artboard [class~="text-[56px]"] { font-size: clamp(30px, 9vw, 42px); letter-spacing: 1px; }
  .figma-artboard [class~="text-[36px]"] { font-size: clamp(24px, 7vw, 30px); letter-spacing: 1px; }
  .figma-artboard [class~="text-[24px]"] { font-size: 21px; }
  .figma-artboard [class~="whitespace-nowrap"] { white-space: normal; overflow-wrap: anywhere; }
  .figma-artboard [class~="whitespace-pre"] { white-space: pre-wrap; overflow-wrap: anywhere; }
  .figma-artboard [class~="shrink-0"] { min-width: 0; flex-shrink: 1; }
  .figma-artboard [class*="max-w-["] { max-width: 100%; }
  .figma-artboard [class~="grid-cols-[repeat(12,minmax(0,1fr))]"] { grid-template-columns: minmax(0, 1fr); grid-template-rows: auto; }
  .figma-artboard [class*="col-["] { grid-column: 1 / -1; }
  .figma-artboard [class~="row-1"], .figma-artboard [class~="row-2"] { grid-row: auto; }
  .figma-artboard [class*="grid-rows-["] { grid-template-rows: auto; }

  .figma-artboard--core [data-node-id="1:1563"] { width: 100%; }
  .figma-artboard--core [data-node-id="1:1564"] { height: auto; min-height: 0; overflow: visible; display: flex; flex-direction: column; }
  .figma-artboard--core [data-node-id="1:1567"],
  .figma-artboard--core [data-node-id="1:1625"],
  .figma-artboard--core [data-node-id="1:1740"],
  .figma-artboard--core [data-node-id="1:1829"],
  .figma-artboard--core [data-node-id="1:1871"] {
    position: relative; inset: auto; top: auto; right: auto; left: auto;
    width: 100%; height: auto; min-height: 0; padding: 32px 20px;
  }
  .figma-artboard--core [data-node-id="1:1639"] { height: auto; grid-template-columns: minmax(0, 1fr); grid-template-rows: auto; }
  .figma-artboard--core [data-node-id="1:1640"],
  .figma-artboard--core [data-node-id="1:1683"] { grid-column: 1 / -1; grid-row: auto; width: 100%; height: auto; }
  .figma-artboard--core [data-node-id="1:1751"] { flex-direction: column; align-items: stretch; }
  .figma-artboard--core [data-node-id="1:1579"],
  .figma-artboard--core [data-node-id="1:1581"] { width: 100%; max-width: 100%; flex-shrink: 1; white-space: normal; overflow-wrap: anywhere; }
  .figma-artboard--core [data-node-id="1:1579"],
  .figma-artboard--core [data-node-id="1:1581"] { font-size: clamp(28px, 7.5vw, 36px); letter-spacing: 0.5px; }
  .figma-artboard--core [data-node-id="1:1597"] { width: 100%; max-width: 100%; flex-direction: column; align-items: stretch; }
  .figma-artboard--core [data-node-id="1:1835"] { width: 100%; max-width: 100%; flex-wrap: wrap; justify-content: stretch; }
  .figma-artboard--core [data-node-id="1:1835"] > div { flex: 1 1 42%; max-width: 48%; }
  .figma-artboard--core [data-node-id="1:1871"] { flex-direction: column; align-items: stretch; gap: 16px; }
  .figma-artboard--core [data-node-id="1:1882"] { flex-wrap: wrap; }

  .figma-artboard--modulos [data-node-id="1:4470"] { width: 100%; }
  .figma-artboard--modulos [data-node-id="1:4507"] { height: auto; grid-template-columns: minmax(0, 1fr); grid-template-rows: auto; }
  .figma-artboard--modulos [data-node-id="1:4496"],
  .figma-artboard--modulos [data-node-id="1:4611"],
  .figma-artboard--modulos [data-node-id="1:4729"] {
    display: flex; height: auto; flex-wrap: wrap; align-items: baseline; gap: 4px; white-space: normal;
  }
  .figma-artboard--modulos [data-node-id="1:4496"] > div,
  .figma-artboard--modulos [data-node-id="1:4611"] > div,
  .figma-artboard--modulos [data-node-id="1:4729"] > div { position: static; translate: none; }
  .figma-artboard--modulos [data-node-id="1:4489"],
  .figma-artboard--modulos [data-node-id="1:4604"],
  .figma-artboard--modulos [data-node-id="1:4722"] { flex-wrap: wrap; align-items: flex-start; gap: 8px; }
  .figma-artboard--modulos [data-node-id="1:4490"],
  .figma-artboard--modulos [data-node-id="1:4605"],
  .figma-artboard--modulos [data-node-id="1:4723"] { width: 100%; max-width: 100%; }
  .figma-artboard--modulos [data-node-id="1:4501"],
  .figma-artboard--modulos [data-node-id="1:4616"],
  .figma-artboard--modulos [data-node-id="1:4734"] { align-self: flex-start; max-width: 100%; }
  .figma-artboard--modulos [data-node-id="1:4865"] { max-width: 100%; overflow: auto; }

  .figma-artboard--cotizador [data-node-id="1:4076"] { grid-template-columns: minmax(0, 1fr); grid-template-rows: auto; }
  .figma-artboard--cotizador [data-node-id="1:4077"],
  .figma-artboard--cotizador [data-node-id="1:4265"] { grid-column: 1 / -1; grid-row: auto; width: 100%; padding-bottom: 0; }
  .figma-artboard--cotizador [data-node-id="1:4275"],
  .figma-artboard--cotizador [data-node-id="1:4373"] { flex-direction: column; align-items: stretch; }
  .figma-artboard--cotizador [data-node-id="1:4079"] { flex-wrap: wrap; justify-content: flex-start; }
  .figma-artboard--cotizador [data-node-id="1:4085"] { width: auto; height: auto; min-height: 0; }
  .figma-artboard--cotizador [data-node-id="1:4085"] > div { position: static; translate: none; }
  .figma-artboard--cotizador [data-node-id="1:4243"] { flex-direction: column; align-items: stretch; gap: 12px; }
  .figma-artboard--cotizador [data-node-id="1:4244"] { display: flex; width: 100%; height: auto; flex-wrap: wrap; gap: 8px 16px; }
  .figma-artboard--cotizador [data-node-id="1:4244"] > div { position: static; translate: none; left: auto; top: auto; }
  .figma-artboard--cotizador [data-node-id="1:4090"],
  .figma-artboard--cotizador [data-node-id="1:4161"],
  .figma-artboard--cotizador [data-node-id="1:4212"] { grid-template-columns: minmax(0, 1fr); grid-template-rows: auto; }
  .figma-artboard--cotizador [class~="col-1"],
  .figma-artboard--cotizador [class~="col-2"] { grid-column: 1 / -1; }
  .figma-artboard--cotizador [data-node-id="1:4260"] { width: 100%; max-width: 100%; flex: 0 0 auto; justify-content: center; }
  .figma-artboard--cotizador [data-node-id="1:4261"] { width: 100%; padding-inline: 8px; }
  .figma-artboard--cotizador [data-node-id="1:4316"] { align-items: flex-start; flex-direction: column; gap: 8px; }
  .figma-artboard--cotizador [data-node-id="1:4322"] { position: relative; width: auto; height: auto; }
  .figma-artboard--cotizador [data-node-id="1:4323"],
  .figma-artboard--cotizador [data-node-id="1:4324"] { position: static; translate: none; }
  .figma-artboard--cotizador [data-node-id="1:4327"] { flex-wrap: wrap; justify-content: flex-start; }
  .figma-artboard--cotizador [data-node-id="1:4328"],
  .figma-artboard--cotizador [data-node-id="1:4332"],
  .figma-artboard--cotizador [data-node-id="1:4336"] { flex: 1 1 30%; }
  .figma-artboard--cotizador [data-node-id="1:4065"] { width: 100%; max-width: 100%; font-size: clamp(24px, 7vw, 30px); white-space: normal; }
  .figma-artboard--cotizador [data-node-id="1:4299"] { align-items: flex-start; flex-direction: column; gap: 4px; }
  .figma-artboard--cotizador [data-node-id="1:4293"] { width: 100%; }
  .figma-artboard--cotizador [data-node-id="1:4294"] { font-size: 26px; letter-spacing: 0.5px; }
  .figma-artboard--cotizador [class~="pb-[602px]"] { padding-bottom: 0; }
}
`;

await writeFile(outputFile, `${rules.join("\n")}\n${pageStyles}\n`, "utf8");
if (unhandled.length) console.warn("Unmapped Figma utilities:", unhandled.join(", "));
console.log(`Generated ${rules.length} Figma utility rules from ${components.length} frames.`);
