// describe function is used to group our test cases, that help if we want to run only specific test or skip only specfic tests

import { render,screen } from "@testing-library/react"
import User from "./component/User"

describe("UI test cases",()=>{
    test("Check input presence in User component",()=>{
        render(<User />)
        const text = screen.getByPlaceholderText("xxxx-xxx-xxx")
        expect(text).toBeInTheDocument()
    })

    test("Check text presence in User component",()=>{
        render(<User />)
        const text = screen.getByText(/I am User Component/i)
        expect(text).toBeInTheDocument()
    })
})

describe("API test cases",()=>{
    test("api case1 Check input presence in User component",()=>{
        render(<User />)
        const text = screen.getByPlaceholderText("xxxx-xxx-xxx")
        expect(text).toBeInTheDocument()
    })

    test("api case2 Check text presence in User component",()=>{
        render(<User />)
        const text = screen.getByText(/I am User Component/i)
        expect(text).toBeInTheDocument()
    })
})