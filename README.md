# Typing Animated

### 📘 วิธีการใช้งาน
```vue
<script setup>
import TypingDelay from "..."
</script>

<template>
  <div>
     <TypingDelay
       :text="['Animated', 'Typing Delay']"
       :typingSpeed="100"
       :eraseDelay="5000"
       :wrapper="'div'"
       :easing="'ease-in'"
       :IsAnimation="true" <!-- true/false สำหรับเปิดปิดอนิเมชั่น opacity -->
     />
  </div>
</template>
```

### 📘 easing ทั้งหมดที่สามารถใช้ได้
```js
["ease-in", "ease-out", "ease-in-out", "ease-out-in", "ease-out-cubic"]
```

###### It can be distributed as you wish, with no restrictions on any rights, and it is under the MIT License. ❤