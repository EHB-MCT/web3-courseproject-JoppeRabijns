const APP = require("./server");
const PORT = 5000;

APP.listen(PORT, () => {
  console.log(`server listening at: http://localhost:${PORT}`);
});
