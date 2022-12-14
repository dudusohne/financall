import { resolve } from "path";

const icons = [
  "Phone",
  "Alarm",
  "FilePlus",
  "PlusCircleOutline",
  "CalendarMultiselect",
  "Account",
  "CloseCircleOutline",
  "CheckCircleOutline",
  "Magnify",
  "Logout",
  "ViewDashboard",
  "WalletPlusOutline",
  "HomeVariant",
  "ContentSavePlusOutline",
  "Broom"
];

export default function () {
  this.nuxt.hook("components:dirs", (dirs) => {
    dirs.push({
      path: resolve("node_modules/vue-material-design-icons"),
      prefix: "MaterialIcon",
      pattern: `**/@(${icons.join("|")}).vue`,
    });
  });
}
