function setData({ name, coord, image, status }) {
  /*
    status: 地面站站状态
    normal: 连接良好 | unconnected 未连接 | error 故障
  */
  switch (status) {
    case "normal":
      return {
        name: name,
        coords: [coord, [coord[0], coord[1] + 10]],
        label: {
          show: true,
          padding: [3, 3],
          backgroundColor: "#01CCEB",
          formatter: "{a|''}",
          rich: {
            a: {
              backgroundColor: {
                image: image,
              },
              width: 150,
              height: 150,
            },
          },
          borderRadius: 75,
          shadowBlur: 30,
          shadowColor: "#01CCEB",
        },
        lineStyle: {
          type: "solid",
          opacity: 1,
          color: "#fff",
        },
      }
    case "error":
      return {
        name: name,
        coords: [coord, [coord[0], coord[1] + 10]],
        label: {
          show: true,
          padding: [3, 3],
          backgroundColor: "#E40437",
          formatter: "{a|''}",
          rich: {
            a: {
              backgroundColor: {
                image: image,
              },
              width: 150,
              height: 150,
            },
          },
          borderRadius: 75,
          shadowBlur: 30,
          shadowColor: "#E40437",
        },
        lineStyle: {
          type: "solid",
          opacity: 1,
          color: "#fff",
        },
      }
    case "unconnected":
      return {
        name: name,
        coords: [coord, [coord[0], coord[1] + 10]],
        label: {
          show: true,
          padding: [3, 3],
          backgroundColor: "#666",
          formatter: "{a|''}",
          rich: {
            a: {
              backgroundColor: {
                image: image,
              },
              width: 150,
              height: 150,
            },
          },
          borderRadius: 75,
          shadowBlur: 30,
          shadowColor: "#aaa",
        },
        lineStyle: {
          type: "solid",
          opacity: 1,
          color: "#fff",
        },
      }
  }
}

export default setData