<template>
    <component :is="wrapper" :style="{ transition: `all ${typingSpeed}ms ${easing}` }">
        <span 
        v-for="(letter, index) in displayText" 
        :key="index"
        :style="getLetterStyle(index)"
        >
            {{ letter }}
        </span>
    </component>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    text: {
        type: Array,
        required: true
    },
    typingSpeed: {
        type: Number,
        default: 100
    },
    eraseDelay: {
        type: Number,
        default: 5000
    },
    wrapper: {
        type: String,
        default: "span",
    },
    easing: {
        type: String,
        default: 'ease-in-out',
        validator(value) {
            return ["ease-in", "ease-out", "ease-in-out", "ease-out-in", "ease-out-cubic"].includes(value);
        }
    }
});

const displayText = ref([]);
const index = ref(0);
const charIndex = ref(0);
const isErasing = ref(false);
const typingIndex = ref(-1);

const typeText = () => {
    if (index.value >= props.text.length) index.value = 0;
    if (!isErasing.value) {
        if (charIndex.value < props.text[index.value].length) {
            displayText.value.push(props.text[index.value][charIndex.value]);
            typingIndex.value = charIndex.value;
            charIndex.value++;
        } else {
            isErasing.value = true;
            typingIndex.value = -1;
        }
    } else {
        if (charIndex.value > 0) {
            displayText.value.pop();
            charIndex.value--;
        } else {
            isErasing.value = false;
            index.value++;
            if (index.value >= props.text.length) index.value = 0;
        }
    }
};

setInterval(typeText, props.typingSpeed);

const getLetterStyle = (letterIndex) => {
    const isTyping = letterIndex === typingIndex.value;
    return {
        opacity: isTyping ? 0.5 : 1,
        transition: `opacity ${props.typingSpeed}ms ${props.easing}`
    }
}
</script>