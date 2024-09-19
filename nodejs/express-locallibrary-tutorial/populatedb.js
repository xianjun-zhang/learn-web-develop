const mongoose = require("mongoose");

// Enable mongoose debug mode
mongoose.set('debug', true);

(async function() {
  try {
    // 设置默认 mongoose 连接
    const mongoDB = "mongodb://localhost:27017/hello_world";
    console.log("Attempting to connect to MongoDB");
    
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30 seconds
    });

    console.log("MongoDB 连接成功！");

  } catch (err) {
    console.error("MongoDB 连接错误：", err);
  }

  var Schema = mongoose.Schema;

  const schema = new Schema({
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now },
      age: { type: Number, min: 18, max: 65, required: true },
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      array: [],
      ofString: [String], // 其他类型也可使用数组
      nested: { stuff: { type: String, lowercase: true, trim: true } },
  });



  const SomeModel = mongoose.model("SomeModel", schema);
  const awesome_instance = new SomeModel({ name: "牛人", age: 18 });

  // 修改字段内容并调用 save() 以修改记录
  awesome_instance.name = "酷毙了的牛人";
  awesome_instance.age = 20;
  await awesome_instance.save()
    .then(() => {
      console.log(`已保存: ${awesome_instance.name}`);
    })
    .catch(err => {
      return handleError(err);
    });

  
    const query = SomeModel.find({ age: 20 });

    // 查找 name, age 两个字段
    query.select("name age");

    // 只查找前 5 条记录
    query.limit(5);

    // 按年龄排序
    query.sort({ age: -1 });

    // 以后某个时间运行该查询
    query.exec()
      .then(athletes => {
        console.log(`Found ${athletes.length} athletes, sorted by age.`, athletes);
      })
      .catch(err => {
        return handleError(err);
      });
      
})();
