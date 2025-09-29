<template>
  <div class="more-content">
    <div class="easter-egg">
      <div class="symbol">✨</div>
      <h3>彩蛋已点亮</h3>
      <p>世界因探索而精彩，感谢你的好奇心。</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.more-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

.easter-egg {
  text-align: center;
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 480px;
  transition: transform 0.3s ease;
}

.easter-egg:hover {
  transform: translateY(-2px);
}

.symbol {
  font-size: 2rem;
  margin-bottom: 12px;
  opacity: 0.9;
}

h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
}

p {
  margin: 0;
  font-size: 1rem;
  color: #bbb;
  line-height: 1.5;
}
</style>