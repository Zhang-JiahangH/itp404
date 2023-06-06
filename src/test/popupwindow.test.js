import { render, fireEvent } from "@testing-library/react";
import Popupwindow from "../Components/Popupwindow";

test("on create popupwindow - not null", ()=>{
    const renderedComponent = render(
    <Popupwindow 
    show={true}
    onHide={
        ()=>{
            console.log("hide")
        }
    }
    name={"beach"}
    rating={5}
    address={"address"}
    />)
    expect(renderedComponent.getByTestId("popupwindow")).toBeDefined()
})

test("on create popupwindow - name correct", ()=>{
    const renderedComponent = render(
    <Popupwindow 
    show={true}
    onHide={
        ()=>{
            console.log("hide")
        }
    }
    name={"beach"}
    rating={5}
    address={"address"}
    />)
    expect(renderedComponent.getByTestId("name").innerHTML).toBe("beach")
})

test("on create popupwindow - reviews correct", ()=>{
    const renderedComponent = render(
    <Popupwindow 
    show={true}
    onHide={
        ()=>{
            console.log("hide")
        }
    }
    name={"beach"}
    rating={5}
    address={"address"}
    viewNumbers={100}
    />)
    expect(renderedComponent.getByTestId("reviews").innerHTML).toBe("100 reviews ")
})

test("on create popupwindow - rating correct", ()=>{
    const renderedComponent = render(
    <Popupwindow 
    show={true}
    onHide={
        ()=>{
            console.log("hide")
        }
    }
    name={"beach"}
    rating={5}
    address={"address"}
    />)
    expect(renderedComponent.getByTestId("rating").innerHTML).toBe("rating: 5")
})

test("on create popupwindow - stars correct", ()=>{
    const renderedComponent = render(
    <Popupwindow 
    show={true}
    onHide={
        ()=>{
            console.log("hide")
        }
    }
    name={"beach"}
    rating={5}
    address={"address"}
    />)
    expect(renderedComponent.getByTestId("stars").rating).toBe()
})

test("on create popupwindow - address correct", ()=>{
    const renderedComponent = render(
    <Popupwindow 
    show={true}
    onHide={
        ()=>{
            console.log("hide")
        }
    }
    name={"beach"}
    rating={5}
    address={"address"}
    />)
    expect(renderedComponent.getByTestId("address").innerHTML).toBe("address")
})