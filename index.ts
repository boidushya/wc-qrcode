import QRCode from "./QRCode";
import clipboardy from "clipboardy";

const markup = QRCode({
  uri: "https://www.google.com",
  size: 500,
});
clipboardy.writeSync(markup);
