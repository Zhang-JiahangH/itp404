import { render, fireEvent } from "@testing-library/react";
import Selector from "../Components/Selector";

test("on create selector - select is not null", ()=>{
    var value = "Venice"
    const renderedComponent = render(
        <Selector 
        name="beach"
        label="target"
        value={value}
        onChange={(curBeach)=>{
            value = curBeach
        }}
        options={[
            {
              value: "Venice",
              label: "Venice",
            },
            {
              value:
                "Santa",
              label: "Santa",
            },
            {
              value:
                "Mothers",
              label: "Mothers",
            },
        ]}
        />
    );

    expect(renderedComponent.getByTestId("selector")).toBeDefined()
}) 

test("on create selector - options are not null", ()=>{
    var value = "Venice"
    const renderedComponent = render(
        <Selector 
        name="beach"
        label="target"
        value={value}
        onChange={(curBeach)=>{
            value = curBeach
        }}
        options={[
            {
              value: "Venice",
              label: "Venice",
            },
            {
              value:
                "Santa",
              label: "Santa",
            },
            {
              value:
                "Mothers",
              label: "Mothers",
            },
        ]}
        />
    );

    expect(renderedComponent.getByTestId("option-Venice")).toBeDefined()
    expect(renderedComponent.getByTestId("option-Santa")).toBeDefined()
    expect(renderedComponent.getByTestId("option-Mothers")).toBeDefined()
}) 

test("on create selector - select is correct", ()=>{
    var value = "Venice"
    const renderedComponent = render(
        <Selector 
        name="beach"
        label="target"
        value={value}
        onChange={(curBeach)=>{
            value = curBeach
        }}
        options={[
            {
              value: "Venice",
              label: "Venice",
            },
            {
              value:
                "Santa",
              label: "Santa",
            },
            {
              value:
                "Mothers",
              label: "Mothers",
            },
        ]}
        />
    );

    expect(renderedComponent.getByTestId("selector").value).toBe("Venice")
}) 

test("on create selector - options are correct", ()=>{
    const renderedComponent = render(
        <Selector 
        name="beach"
        label="target"
        value={"Venice"}
        onChange={(curBeach)=>{
            value=curBeach
        }}
        options={[
            {
              value: "Venice",
              label: "Venice",
            },
            {
              value:
                "Santa",
              label: "Santa",
            },
            {
              value:
                "Mothers",
              label: "Mothers",
            },
        ]}
        />
    );

    expect(renderedComponent.getByTestId("option-Venice").innerHTML).toBe("Venice")
    expect(renderedComponent.getByTestId("option-Santa").innerHTML).toBe("Santa")
    expect(renderedComponent.getByTestId("option-Mothers").innerHTML).toBe("Mothers")
}) 