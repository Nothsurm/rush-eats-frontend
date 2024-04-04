import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {
    onChange: (value: string) => void;
    sortOption: string
}

const SORT_OPTIONS = [
        {
            label: "Best match",
            value: "bestMatch"
        },
        {
            label: "Delivery price",
            value: "deliveryPrice"
        },
        {
            label: "Estimated delivery time",
            value: "estimatedDeliveryTime"
        },
]

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {

    const selectedSortLabel = 
        SORT_OPTIONS.find((option) => option.value === sortOption)?.label || 
        SORT_OPTIONS[0].label

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursos-pointer">
                <Button variant="outline" className="w-full">
                    Sort by: {selectedSortLabel}
                </Button>
                <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => onChange(option.value)}
                            key={option.value}
                        >
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}

export default SortOptionDropdown;