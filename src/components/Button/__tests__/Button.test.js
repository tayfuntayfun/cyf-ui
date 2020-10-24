import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  test("matches snapshots", () => {
    const mockOnClick = jest.fn(() => null);

    const { container } = render(
      <Button label="Button" onClick={mockOnClick} variant="btnPrimaryOutlined">
        Click Me
      </Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("onClick is called upon user click", () => {
    const mockOnClick = jest.fn(() => null);

    const { getByText } = render(
      <Button label="Button" onClick={mockOnClick} variant="btnPrimaryOutlined">
        Click Me
      </Button>
    );

    const button = getByText("Click Me");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
