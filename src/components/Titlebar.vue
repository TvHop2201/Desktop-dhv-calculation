<template>
    <div class="titlebar">
        <img v-bind:src="ico">
        <div class="bar">
            <slot></slot>
            <div class="dragregion">
                <span>{{ title }}</span>
            </div>
            <div class="button" @click="onMinimize"><span class="dash">&#x2012;</span></div>
            <div class="button" @click="onMaximize"><span>&#9744;</span></div>
            <div class="button close" @click="onClose"><span>&#10005;</span></div>
        </div>
    </div>
</template>

<script>
const electron = window.require ? window.require('electron') : null

export default {
    props: ['title', 'ico'],
    methods: {
        onClose() {
            close()
        },
        onMinimize() {
            electron.ipcRenderer.send("minimize")
        },
        onMaximize() {
            electron.ipcRenderer.send("maximize")
        }
    }
}
</script>

<style scoped>
.titlebar {
    display: flex;
    color: var(--vue-electron-titlebar-color);
    background-color: var(--vue-electron-titlebar-background-color);
    height: var(--vue-electron-titlebar-height);
}

img {
    height: var(--vue-electron-titlebar-height);
}

.bar {
    flex-grow: 1;
    display: flex;
}

.dragregion {
    flex-grow: 1;
    text-align: center;
    vertical-align: middle;
    margin: 3px 3px 0px 0px;
    -webkit-app-region: drag;
    display: flex;
    align-items: center;
}

.dragregion>span {
    flex-grow: 1;
    margin-top: -3px;
}

.button {
    width: 44px;
    text-align: center;
    font-size: 12pt;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.button>span {
    flex-grow: 1;
    margin-top: -3px;
    user-select: none;
}

.button:hover {
    background-color: var(--vue-electron-titlebar-button-hover-color);
}

.close:hover {
    background-color: red;
    color: white;
}

.button>span.dash {
    vertical-align: sub;
    margin-top: 0px;
}
</style>