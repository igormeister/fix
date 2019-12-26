const dist = (x, y, z) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2)).toFixed(4);
}

function getMath(req, res) {
  return res.json({
    "result": dist(req.body.x, req.body.y, req.body.z)
  });
}

//1//0c-hk0_siwfhjbCgYIARAAGAwSNwF-L9IrPjCBPO4-clMNh2wqOkKWeo1oTXLbC0FI6l0dQAgkirUGKcg2t2PgQBgBkj9lWEXjcvQ

module.exports={getMath};