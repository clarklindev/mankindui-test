import {
  Button,
  Checkbox,
  Counter,
  Divider,
  Heading,
  Input,
  Label,
  Layout,
  RadioButton,
  Select,
  TabbedCard,
} from "@mankindui/core";
import { useState } from "react";
import * as z from "zod/v4";

import Code from "./Code.mdx";

export default function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [workExperience, setWorkExperience] = useState(0);
  const [favoriteColor, setFavoriteColor] = useState(Array(4).fill(false));
  const [driversLicense, setDriversLicense] = useState<string | null>();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    email: z.string().email("Invalid email address"),
    newsLetter: z.boolean(),
    workExperience: z.number().min(0, "Work experience must be 0 or more"),
    favoriteColor: z.enum(["red", "blue", "yellow", "other"]),
    driversLicense: z
      .enum(["yes", "no"])
      .nullable()
      .refine((val: "yes" | "no" | null) => val !== null, {
        message: "Please select a valid option",
      }),
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Form submitted");
    const selectedColorIndex = favoriteColor.findIndex((val) => val);
    const selectedColor =
      ["red", "blue", "yellow", "other"][selectedColorIndex] || null;

    const formData = {
      name,
      surname,
      email,
      newsLetter,
      workExperience,
      favoriteColor: selectedColor,
      driversLicense: driversLicense || null,
    };

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      // Show validation errors
      const formatted = result.error.format();
      setFormErrors({
        name: formatted.name?._errors?.[0] || "",
        surname: formatted.surname?._errors?.[0] || "",
        email: formatted.email?._errors?.[0] || "",
        workExperience: formatted.workExperience?._errors?.[0] || "",
        favoriteColor: formatted.favoriteColor?._errors?.[0] || "",
        driversLicense: formatted.driversLicense?._errors?.[0] || "",
      });
      return;
    }

    console.log("Form submitted:", formData);

    setFormErrors({});
  };

  return (
    <TabbedCard componentName="Form Example">
      <TabbedCard.Preview>
        <>
          <Layout className="flex justify-center">
            <div className="border border-gray-400/50 min-h-30 w-full md:w-150 flex justify-center flex-col p-5 m-3 md:m-15 lg:m-30 rounded-xl">
              <Heading as="h2" className="text-2xl mb-6">
                Details page
              </Heading>

              <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <Heading as="h5" className="text-l mb-2">
                    Name
                  </Heading>
                  <Input>
                    <Input.InputElement
                      name="name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                        setFormErrors((prev) => ({ ...prev, name: "" }));
                      }}
                    />
                  </Input>
                  {formErrors.name && (
                    <p className="text-red-500">{formErrors.name}</p>
                  )}
                </div>

                {/* Surname */}
                <div>
                  <Heading as="h5" className="text-l mb-2">
                    Surname
                  </Heading>
                  <Input>
                    <Input.InputElement
                      name="surname"
                      value={surname}
                      onChange={(event) => {
                        setSurname(event.target.value);
                        setFormErrors((prev) => ({ ...prev, surname: "" }));
                      }}
                    />
                  </Input>
                  {formErrors.surname && (
                    <p className="text-red-500">{formErrors.surname}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Heading as="h5" className="text-l mb-2">
                    Email
                  </Heading>
                  <Input>
                    <Input.InputElement
                      name="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setFormErrors((prev) => ({ ...prev, email: "" }));
                      }}
                    />
                  </Input>
                  {formErrors.email && (
                    <p className="text-red-500">{formErrors.email}</p>
                  )}
                </div>

                {/* Newsletter */}
                <div>
                  <Heading as="h5" className="text-l mb-2">
                    Newsletter
                  </Heading>
                  <Label
                    label="signup for newsletter"
                    labelDirection="right"
                    gap="2"
                  >
                    <Checkbox
                      size="XL"
                      checked={newsLetter}
                      name="checkbox"
                      onChange={() => {
                        setNewsLetter((prev) => !prev);
                      }}
                    />
                  </Label>
                </div>

                {/* Work Experience */}
                <div>
                  <Heading as="h5" className="text-l mb-2">
                    How many years of work experience?
                  </Heading>
                  <Counter
                    savedData={workExperience}
                    onChange={(newValue) => {
                      setWorkExperience(newValue);
                      setFormErrors((prev) => ({
                        ...prev,
                        workExperience: "",
                      }));
                    }}
                  />
                  {formErrors.workExperience && (
                    <p className="text-red-500">{formErrors.workExperience}</p>
                  )}
                </div>

                {/* Favorite Color */}
                <div>
                  <Heading as="h5">Your favorite color</Heading>
                  <div className="flex flex-col space-y-5">
                    {["red", "blue", "yellow", "other"].map((color, index) => (
                      <Label
                        key={`RadioButtonGroupB-${index}`}
                        label={color}
                        labelDirection="right"
                      >
                        <RadioButton
                          checked={favoriteColor[index]}
                          name="RadioB"
                          size="XL"
                          onChange={() => {
                            const newValues = [...favoriteColor].fill(false);
                            newValues[index] = true;
                            setFavoriteColor(newValues);

                            setFormErrors((prev) => ({
                              ...prev,
                              favoriteColor: "",
                            }));
                          }}
                        />
                      </Label>
                    ))}
                  </div>
                  {formErrors.favoriteColor && (
                    <p className="text-red-500">{formErrors.favoriteColor}</p>
                  )}
                </div>

                {/* Drivers License */}
                <div>
                  <Heading as="h5">Drivers license</Heading>
                  <Select>
                    <Select.SelectElement
                      savedData={driversLicense}
                      onChange={(event) => {
                        setDriversLicense(event.target.value);
                        setFormErrors((prev) => ({
                          ...prev,
                          driversLicense: "",
                        }));
                      }}
                    >
                      {[
                        { value: "option0", text: "Select an option" },
                        { value: "yes", text: "yes" },
                        { value: "no", text: "no" },
                      ].map((each, index) => (
                        <Select.SelectOption value={each.value} key={index}>
                          {each.text}
                        </Select.SelectOption>
                      ))}
                    </Select.SelectElement>
                    <Select.SelectIcon></Select.SelectIcon>
                  </Select>
                  {formErrors.driversLicense && (
                    <p className="text-red-500">{formErrors.driversLicense}</p>
                  )}
                </div>

                <Divider variation="horizontal" />

                <Button className="flex justify-center max-w-[100px]">
                  Submit
                </Button>
              </form>
            </div>
          </Layout>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
}
