import FormValidator from "./FormValidator";

it("validates an entire form", () => {
  const validator = new FormValidator();
  const emptyCheck = v => v && v.trim().length > 0;

  validator.addRule("name", v => v.startsWith("A"), "Name should start with A");
  validator.addRule("email", emptyCheck, "Email cannot be empty");

  const cleanResult = validator.validate({
    name: "A_name::",
    email: "::email::",
    otherField: "::otherValue::"
  });

  expect(cleanResult).toEqual({
    success: true,
    errors: {}
  });

  const dirtyResult = validator.validate({
    name: "",
    email: "::email::"
  });

  expect(dirtyResult).toEqual({
    success: false,
    errors: {
      name: ["Name should start with A", "Name cannot be empty"]
    }
  });
});
