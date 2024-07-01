const express = require("express");
const router = express.Router();
const fs = require("fs"); //用於讀取和寫入文件。
const path = require("path"); //處理和轉換文件路徑

//文件路徑 (絕對路徑)
const ordersFilePath = path.join(__dirname, "order.json");

// 讀取訂單資訊
const readOrdersFromFile = () => {
  try {
    const data = fs.readFileSync(ordersFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading orders file:", err);
    return [];
  }
};

// 寫入訂單資訊至order.json
//
const writeOrdersToFile = (orders) => {
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error("Error writing to orders file:", err);
  }
};

router.post("/checkout", (req, res) => {
  const { items, totalPrice } = req.body; // 獲取訂單資訊
  console.log("Received order data:", { items, totalPrice });

  // 讀取訂單數據
  const orders = readOrdersFromFile();

  // 追加新的訂單
  const newOrder = {
    id: orders.length + 1,
    items: items,
    totalPrice: totalPrice,
    date: new Date().toISOString(),
  };
  orders.push(newOrder);

  // 保存更新後的訂單數據
  writeOrdersToFile(orders);

  // 返回完整的訂單信息
  res.status(200).json({
    message: "Order received successfully",
    order: newOrder,
  });
});

//獲取所有訂單
router.get("/order", (req, res) => {
  const orders = readOrdersFromFile();
  res.json(orders);
});

router.get("/order/:id", (req, res) => {
  const orders = readOrdersFromFile();
  const order = orders.find((item) => item.id === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

//將該路由模組導出，以便在其他文件中引入並使用
module.exports = router;
