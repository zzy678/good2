let complimentIndex = 0;
const compliments = [
  "你的字迹工整清秀，看着你的笔记，满心都是赏心悦目，字如其人呐~",
  "你待人真诚热忱，和你相处，满心都是暖意。",
  "你笑起来眉眼弯弯，感染力超强，感觉一整天的阴霾都被驱散啦。",
  " 你的穿搭自成风格，日常都被你穿出了时尚秀场感。",
  "跟你聊天如沐春风，你轻言细语，字字透着聪慧，每句回应都超暖心。",
  "你的眼睛亮晶晶的，藏着漫天星辰与温柔笑意，光是对视，心都化了。",
  "是不是听的有点肉麻，哈哈哈，不过最后想跟你说别太累了哟，身体健康，心情愉快才是最重要的，加油！"
];

function showCompliment() {
  if (complimentIndex < compliments.length) {
    alert(compliments[complimentIndex]);
    complimentIndex++;
  } else {
    alert("你狗哥厉害不？嘻嘻！");
	alert("别点啦，没啦");
    complimentIndex = 0;
  }
}