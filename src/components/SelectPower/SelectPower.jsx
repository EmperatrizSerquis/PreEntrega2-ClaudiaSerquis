import { useEffect } from "react"

const options = [
    {
        value: "Calida",
        label: "Calida"
    },
    {
        value: "Fria",
        label: "Fria"
    },
    {
        value: "Ambas",
        label: "Ambas"
    },
]

const SelectPower = ({setSelect, options}) => {

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    useEffect(() => {
        setSelect(options[0].value)
    }, [])

    return (
        <select onChange={handleSelect}>
            {
                options.map((opt) => <option key={opt.value} value={opt.value}>{opt.value}</option>)
            }
        </select>
    )
}

export default SelectPower