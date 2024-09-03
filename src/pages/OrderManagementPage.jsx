import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderTracking from "../components/OrderTracking";
import PurchaseOrders from "../components/PurchaseOrders";
import VendorManagement from "../components/VendorManagement";
<<<<<<< HEAD
import VendorDetailsPage from "../components/VendorDetailsPage";
import { TaskScheduling } from "../components/TaskScheduling";
>>>>>>> 43666c7bc2b4daad9510daff5ee48056e62ed152

function OrderManagementPage() {
  return (
    <div>
      <h1>Order Management</h1>

      <Routes>
        <Route path="tracking" element={<OrderTracking />} />
        <Route path="vendors" element={<VendorManagement />} />
        <Route path="purchase-orders" element={<PurchaseOrders />} />
        <Route path="vendord" element={<VendorDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default OrderManagementPage;
