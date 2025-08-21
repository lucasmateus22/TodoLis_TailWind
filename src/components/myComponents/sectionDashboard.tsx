import ItemDashboard from "./itemDashboard/itemDashboard"

export default function SectionDashboard() {
    return (
        <>
            <div className="flex flex-col items-start justify-center rounded-md !h-[95%] w-[100%]">
                <ItemDashboard />
            </div>
        </>
    )
}