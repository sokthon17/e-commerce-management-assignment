import { BaseButton } from "@/core/component/BaseButton";
import { SearchInputComponent } from "@/core/component/SearchInput";

export function ProductTopActions() {
  const EXPORT_ICON = "/svg/export-blue-500.svg";
  const ADD_ICON = "/svg/add-white-20.svg";
  return (
    <div className="grid grid-cols-[1fr_auto_auto] gap-3">
      <SearchInputComponent />
      <BaseButton
        icon={EXPORT_ICON}
        label="Export"
        className="bg-blue-700/15 text-blue-700 border-transparent"
      />
      <BaseButton
        icon={ADD_ICON}
        label="Add Product"
        className="bg-blue-700 text-white border-transparent"
      />
    </div>
  );
}
