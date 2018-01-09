module.exports = {
  output: "src/api", // 产出到项目下的 api 目录，不用手动创建
  template: "gitlab:git.51.nb:html5/axios-template", // 基于 mock-templates 提供的 axios 模板
  syncSwagger: true, // 同步Swagger
  projects: [
    {
      id: "10.247.33.184:8080", // Swagger 文档IP地址
      name: "demo"
    }
  ]
};
