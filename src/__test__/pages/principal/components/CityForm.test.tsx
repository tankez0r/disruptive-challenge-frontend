import { beforeEach, describe, expect, test, } from "vitest"
import { render, fireEvent, screen, act } from '@testing-library/react'
import '@testing-library/react'
import '@testing-library/jest-dom'
import CityForm from "../../../../pages/principal/components/CityForm"
import { Istore } from "../../../../infraestructure/interfaces/store.inteface"
import { CityInfo } from "../../../../core/entities/cityInfo.entitie"
import { imageURL } from "../../../../core/entities/ImageURL.entitie"
import { WeatherInfo } from "../../../../core/entities/weatherInfo.entitie"

const mockStorage: Istore = {
    queryNameString: "",
    latLonQuery: { lat: "", lon: "", name: "", nameSearch: "" },
    cityOptions: [{ label: "mock 1", value: { lat: "1", lon: "1", name: "mock 1 name", nameSearch: "mock 1 nameSearch" } },
    { label: "mock 2", value: { lat: "2", lon: "2", name: "mock 2 name", nameSearch: "mock 2 nameSearch" } },
    { label: "mock 3", value: { lat: "3", lon: "3", name: "mock 3 name", nameSearch: "mock 3 nameSearch" } }
    ],
    citySelected: {
        name: "",
        temp: "",
        temp_min: "",
        temp_max: "",
        pressure: "",
        humidity: "",
        description: "",
        icon: ""
    },
    cityImageURL: {
        source: "",
        blur_hash: "",
        alt_description: ""
    },
    setQueryNameInStore: function (by: string): void {
        console.log(by)
    },
    setLatLonQuery: function (by: CityInfo): void {
        console.log(by)
    },
    setCityOptions: function (by: CityInfo[]): void {
        console.log(by)
    },
    setCitySelected: function (by: WeatherInfo): void {
        console.log(by)
    },
    setCityURL: function (by: imageURL): void {
        console.log(by)
    }
}

beforeEach(() => {
    render(<CityForm storage={mockStorage} />)
})

describe("CityForm test suite", () => {
    test("Formulario se renderiza", () => {
        const form = screen.queryByTestId("form")
        expect(form).toBeInTheDocument()
    })


    test("Al hacer cambios en el input visible formulario se despliegan las opciones", () => {
        const input = screen.queryByTestId("input")

        if (input)
            act(() => { fireEvent.change(input, { target: { value: "asd" } }) })


        const liOptions = screen.getAllByTestId("li-option")

        liOptions.forEach(option => expect(option).toBeInTheDocument)

    })

    test("Al hacer focus en el input visible formulario se despliegan las opciones", () => {
        const input = screen.queryByTestId("input")
        const liOption = screen.queryByTestId("li-option")



        expect(liOption).not.toBeInTheDocument()

        if (input)
            act(() => { fireEvent.change(input, { target: { value: "asd" } }) })

        const liOptions = screen.queryAllByTestId("li-option")
        if (liOptions)
            liOptions.forEach(option => expect(option).toBeInTheDocument)

    })

    test("Al hacer click en una de las opciones esta se situa como valor del input visible", () => {
        const input = screen.queryByTestId("input")


        if (input)
            act(() => { fireEvent.change(input, { target: { value: "asd" } }) })



        const liOptions = screen.queryAllByTestId("li-option")
        if (liOptions)
            act(() => { fireEvent.click(liOptions[0]) })

        expect(input).toHaveValue(mockStorage.cityOptions[0].value.name)
    })


})
