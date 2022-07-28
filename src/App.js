import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ReceiptTable from "./components/ReceiptTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [receiptTable, setReceiptTable] = useState([]);

  const getReceiptDate = async () => {
    try {
      fetch("receiptData.json")
        .then((res) => res.json())
        .then((data) => setReceiptTable(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReceiptDate();
  }, []);

  return (
    <div>
      <Form setReceiptTable={setReceiptTable}></Form>
      <ReceiptTable receiptTable={receiptTable}></ReceiptTable>
      <ToastContainer />
    </div>
  );
}

export default App;
