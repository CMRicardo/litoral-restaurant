import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { employeeSchema } from "@/schemas/employee-schema";
import { ReactElement } from "react";

export const FormItem = ({
  form,
  name,
  label,
  control,
  description,
}: {
  form: UseFormReturn<z.infer<typeof employeeSchema>>;
  name: string;
  label: string;
  control: ReactElement;
  description?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <control {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
