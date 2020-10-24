import React from "react";
import Button from "../";
import { render } from "@testing-library/react";

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
});
