import{ test, expect } from "vitest"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

test("My App", async () => {
    const user = userEvent.setup()
    const app = render(<App />)

    const textareaFrom = app.getByPlaceholderText("Introducir texto")

    await user.type(textareaFrom, "Hola Mundo")
    const result = await app.findAllByDisplayValue(/Hello world/i, {}, { timeout: 5000 })

    expect(result).toBeTruthy()
})