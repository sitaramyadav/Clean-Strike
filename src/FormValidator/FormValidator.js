class FormValidator {
  constructor() {
    this.validators = {};
  }
  addRule(name, validator, error) {
    let rules;
    if (this.doesValidatorsHas(name) && this.validators[name].rules) {
      rules = [...this.validators[name].rules, { validator, error }];
    } else {
      rules = [{ validator, error }];
    }
    this.validators[name] = {
      rules
    };
  }

  validate(inputs) {
    const errors = {};
    let success = true;
    for (const formField in inputs) {
      this.doesValidatorsHas(formField) &&
        this.validators[formField].rules.forEach(ruleValidation => {
          if (!ruleValidation.validator(formField)) {
            success = false;
            if (isFieldExist(errors, formField)) {
              this.addErrorForAField(errors, formField, ruleValidation);
            } else {
              errors[formField] = [];
              errors[formField].push(ruleValidation.error);
            }
          }
        });
    }
    return { success, errors };
  }

  isFieldExist(obj, field) {
    return obj[field] ? true : false;
  }
  addErrorForAField(errors, formField, ruleValidation) {
    errors[formField].push(ruleValidation.error);
  }
  doesValidatorsHas(fieldName) {
    return this.validators[fieldName] ? true : false;
  }
}
export default FormValidator;
