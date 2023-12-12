const isObjEmpty = obj => Object.keys(obj).length === 0;

const FormikValuesChanged = (formikInitialValues, formikValues) => {
  for (const key in formikValues) {
    if (formikValues[key] === formikInitialValues[key]) {
      return true;
    }
  }

  return false;
};

// ** Function: Formatted Name
const formatFullName = (firstname, lastname) => {
  let fullName = firstname;

  if (lastname) {
    fullName += ` ${lastname}`;
  }

  return fullName;
};

const CalculateAverage = ({list, property}) => {
  const propertyValues =
    list?.length > 0 ? list.map(record => record[property]) : [];

  const sum = propertyValues.reduce((acc, value) => acc + value, 0);
  return propertyValues.length > 0 ? sum / propertyValues.length : 0;
};

export {isObjEmpty, FormikValuesChanged, CalculateAverage, formatFullName};
