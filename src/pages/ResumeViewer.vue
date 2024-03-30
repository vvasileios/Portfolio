<template>
  <iframe :src="viewerUrl"></iframe>
</template>

<script>
export default {
  name: "ResumeViewer",

  data() {
    return {
      pdfUrl: "/src/assets/dummy.pdf",
      baseViewerUrl: "https://docs.google.com/viewer?url=",
    };
  },

  computed: {
    viewerUrl() {
      return `${this.baseViewerUrl}${encodeURIComponent(
        this.pdfUrl
      )}&embedded=true`;
    },
  },
};
</script>
