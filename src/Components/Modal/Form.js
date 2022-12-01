import styled from "styled-components";
import linkedinIcon from "../../images/linkedin-icon.svg";
import useFormWithValidation from "../../utils/formValidationHook";

/**
 * Modal Form Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const FormTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const FormText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  font-size: ${(props) => props.theme.fonts.sizes.text_m};
  line-height: 20px;
  color: ${(props) => props.theme.colors.blue_component_color};
`;

const FormIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 9px;
`;

const FormContainer = styled.form`
  font-family: ${(props) => props.theme.fonts.families.text};
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Label = styled.label`
  color: ${(props) =>
    props.error === '' || props.error === undefined ? '#000' : '#FF1A1A'};
  padding: 0;
  margin: 0;
  width: 100%;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid
    ${(props) =>
      props.error === '' || props.error === undefined ? '#000' : '#FF1A1A'};
  border-radius: 12px;
  padding: 15px 20px;
  box-sizing: border-box;
  margin-bottom: 24px;
  &::placeholder {
    color: #000;
    opacity: 1;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InputContainerDiv = styled.div`
  width: 259px;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  width: 168px;
  height: 50px;
  left: 451px;
  background: ${(props) => props.theme.colors.aqua_button_color};
  border-radius: 12px;
  color: #fff;
  padding: 15px 28px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SubmitText = styled.p`
	width: 349px;
	font-weight: 400;
	font-size: 12px;
	line-height: 1.33;
`;

function Form({ handleSuccess }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("http://localhost:3001/", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((res) => {
				resetForm();
				handleSuccess();
			})
			.catch((error) => {
				console.log(error);
			});
	};

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>
        <FormIcon src={linkedinIcon} />
        <FormText>Auto-fill with LinkedIn</FormText>
      </FormTitle>
      <Label error={errors.name} htmlFor="name">
        Name{' '}
        {errors.name !== '' && errors.name !== undefined
          ? `(${errors.name})`
          : ''}
      </Label>
      <Input
        error={errors.name}
        required
        type="text"
        minLength="2"
        id="name"
        name="name"
        placeholder="Tara Marshall-Hill"
        onChange={handleChange}
        value={values.name || ''}
      />
      <InputContainer>
        <InputContainerDiv>
          <Label error={errors.company} htmlFor="company">
            Company{' '}
            {errors.company !== '' && errors.company !== undefined
              ? `(${errors.company})`
              : ''}
          </Label>
          <Input
            error={errors.company}
            required
            type="text"
            minLength="2"
            id="company"
            name="company"
            placeholder="Sindano Health"
            onChange={handleChange}
            value={values.company || ''}
          />
        </InputContainerDiv>
        <InputContainerDiv>
          <Label error={errors.title} htmlFor="title">
            Title{' '}
            {errors.title !== '' && errors.title !== undefined
              ? `(${errors.title})`
              : ''}
          </Label>
          <Input
            error={errors.title}
            required
            type="text"
            minLength="2"
            id="title"
            name="title"
            placeholder="Founder"
            onChange={handleChange}
            value={values.title || ''}
          />
        </InputContainerDiv>
      </InputContainer>
      <Label error={errors.email} htmlFor="email">
        Email{' '}
        {errors.email !== '' && errors.email !== undefined
          ? `(${errors.email})`
          : ''}
      </Label>
      <Input
        error={errors.email}
        required
        type="email"
        id="email"
        name="email"
        placeholder="TaraMarshallHill@sindanohealth.com"
        onChange={handleChange}
        value={values.email || ''}
      />
      <InputContainer>
        <SubmitButton type="submit">Schedule Call</SubmitButton>
        <SubmitText>
          A member of our team will be in touch with you to schedule a time to
          chat
        </SubmitText>
      </InputContainer>
    </FormContainer>
  );
}

export default Form;
