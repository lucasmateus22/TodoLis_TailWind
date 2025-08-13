import ItemDashboard from "./itemDashboard/itemDashboard"
import SheetDash from "./itemDashboard/itens/sheetDash"

export default function SectionDashboard() {
    return (
        <>
            <div className="flex flex-col items-start justify-start rounded-md !h-195 bg-white w-full">
                <SheetDash/>
                <ItemDashboard />
            </div>
        </>
    )
}