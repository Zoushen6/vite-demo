<template>
  <div>
    <Upload
      v-model:file-list="fileList"
      :before-upload="beforeUpload"
      list-type="picture"
      @preview="openPreview"
    >
      <a-button>
        <upload-outlined />
        选择文件
      </a-button>
    </Upload>
    <img :src="resultSrc" style="margin-top: 30px; height: 500px" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { UploadOutlined } from "@ant-design/icons-vue";
  import type { UploadProps } from "ant-design-vue";
  import { Upload } from "ant-design-vue";
  const fileList = ref<UploadProps["fileList"]>([
    // {
    //   uid: "-1",
    //   name: "xxx.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    //   thumbUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);
  const icon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDJjNS41MiAwIDEwIDQuNDggMTAgMTBzLTQuNDggMTAtMTAgMTBTMiAxNy41MiAyIDEyUzYuNDggMiAxMiAyWk02LjAyMyAxNS40MTZDNy40OTEgMTcuNjA2IDkuNjk1IDE5IDEyLjE2IDE5YzIuNDY0IDAgNC42NjktMS4zOTMgNi4xMzYtMy41ODRBOC45NjggOC45NjggMCAwIDAgMTIuMTYgMTNhOC45NjggOC45NjggMCAwIDAtNi4xMzcgMi40MTZaTTEyIDExYTMgMyAwIDEgMCAwLTZhMyAzIDAgMCAwIDAgNloiLz48L3N2Zz4=";
  const resultSrc = ref("");
  const beforeUpload: UploadProps["beforeUpload"] = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        const canvas = document.createElement("canvas");
        const img = new Image();
        img.src = e.target.result;
        img.onload = async () => {
          let ctx: any = canvas.getContext("2d");
          let data = "";
          let imgWidth = img.width;
          let imgHeight = img.height;
          let fontsize = imgWidth > imgHeight ? imgHeight / 10 : imgWidth / 10; //设定文字大小随图片大小变化
          canvas.width = imgWidth; //画布宽度
          canvas.height = imgHeight; //画布高度
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight); //绘制图片大小和先前图片一致
          ctx.font = `${fontsize}px Verdana`; //文字大小
          addWaterMarkText(ctx, "Ant Design Vue", 20, 20);
          addWaterMarkText(ctx, "my text", 100, 250);
          const img2 = await loadImg(icon);
          ctx.rotate((30 * Math.PI) / 180);
          addWaterMarkImg(ctx, img2, 50, 50);
          data = canvas.toDataURL(file.type); //输出压缩后的base64
          //base64转file
          let arr: any = data.split(",");
          let mime = arr[0].match(/:(.*?);/)[1];
          let bstr = atob(arr[1]);
          let n = bstr.length;
          let u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          let files: any = new File([new Blob([u8arr], { type: mime })], file.name, {
            type: file.type,
          });
          files.uid = file.uid;
          resolve(files);
        };
      };
    });
  };

  const addWaterMarkText = (ctx, str, x, y) => {
    ctx.fillStyle = "rgb(96,96,96,0.3)"; //水印颜色，透明度
    ctx.textBaseline = "top"; //水印对其的基准线
    ctx.fillText(str, x, y); //添加的文字
  };

  const addWaterMarkImg = (ctx, img, x, y) => {
    ctx.drawImage(img, x, y, 30, 30);
  };

  const loadImg = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve(img);
      };
    });
  };

  const openPreview = (file) => {
    console.log(file);
    getBase64(file.originFileObj).then((res: any) => {
      resultSrc.value = res;
    });
    // resultSrc.value = file.thumbUrl;
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
</script>

<style scoped></style>
