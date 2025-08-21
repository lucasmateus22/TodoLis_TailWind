import ItemDashboard from "./itemDashboard/itemDashboard"
import SheetDash from "./itemDashboard/itens/sheetDash"

export default function SectionDashboard() {
    return (
        <>
            <div className="flex flex-col items-start justify-center rounded-md !h-195 w-[100%]">
                
                <ItemDashboard />
            </div>
        </>
    )
}