import React, { useState } from "react";
import "./ContentForm.css";
import { useForm } from "react-hook-form";
import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "../../utils/api";

const contentSchema = z.object({
  title: z.string().min(1, { message: "Title required" }),
  description: z.string().min(1, { message: "Add description" }),
  file: z
    .any()
    .refine((value) => value && value[0], { message: "File is required" })
    .refine((value) => value[0]?.size < 100000000, {
      message: "The file is too large",
    }),
});
const ContentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contentSchema) });

  const addContent = async (data) => {
    try {
        
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("file", data.file[0]);
        console.log(formData)
        const response = await apiClient.post("/content", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error posting content:", error);
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2>Submit Content</h2>
        <form onSubmit={handleSubmit(addContent)}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" {...register("title")} />
            {errors.title && <p className="error">{errors.title?.message}</p>}
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea {...register("description")} />
            {errors.description && <p className="error">{errors.description?.message}</p>}
          </div>
          <div className="form-group">
            <label>File:</label>
            <input type="file" name="file" {...register("file")}  />
            {errors.file && <p className="error">{errors.file?.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContentForm;
