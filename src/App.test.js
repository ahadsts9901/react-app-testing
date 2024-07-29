import { render, screen } from "@testing-library/react";
import App from "./App"
import Input from "./component/Input";

// checking text is present or not (getByText)
test("Checking text presence",()=>{
  // ====== in render function we pass the component which we want to test
  render(<App />)

  // const text = screen.getByText("I am learning testing123");

  // ===== with case in-sensitive
  const textCaseInSensitive = screen.getByText(/I am learning testing123/i);
  expect(textCaseInSensitive).toBeInTheDocument()
})


// checking text using title prop (getByTitle)
test("check text by title prop",()=>{
  render(<App />)
  const textByTitle = screen.getByTitle('my-test-title');
  expect(textByTitle).toBeInTheDocument()
})

// testing on input element
test("Check the input is present or not",()=>{
  render(<Input />)

  // ===== by role
  let input = screen.getByRole("textbox");

  // ===== by placeholder
  // let input = screen.getByPlaceholderText('Enter your Email');

  // ===== by attribute
  // expect(input).toBeInTheDocument()        // if there is one input is present in the render component
  expect(input).toHaveAttribute('id',"email")
  
})



