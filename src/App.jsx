import { Table } from "./components/Table";
import { useState } from "react";


function App() {
  const columns = [
    { header: "نام", accessor: "name" },
    { header: "ایمیل", accessor: "email" },
    { header: "نقش", accessor: "role" },
  ];

  const data = [
    { name: "علی", email: "ali@example.com", role: "ادمین" },
    { name: "سارا", email: "sara@example.com", role: "کاربر" },
    { name: "مهدی", email: "mahdi@example.com", role: "ویرایشگر" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "16px" }}>لیست کاربران</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
export default App
