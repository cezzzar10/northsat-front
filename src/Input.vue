<script setup>
const emit = defineEmits([
    'test-device',
    'sign-in-ticket',
    'sign-in-student',
    'educator-login',
    'need-help',
])
</script>

<template>
    <div class="bluebook-login">
        <div class="test-device-wrapper">
            <button type="button" class="test-device-btn" @click="emit('test-device')">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect x="5" y="7" width="14" height="9" rx="1" />
                    <path d="M8 19h8M12 16v3" />
                </svg>
                <span>Test Your Device</span>
            </button>
        </div>

        <div class="brand-wrapper">
            <div class="brand-logo">
                <svg height="46" width="46" viewBox="0 0 575 575" fill="#fff" aria-hidden="true">
                    <polygon points="214,55 514,404 349,373 245,518" />
                    <polygon points="61,298 175,248 184,333" />
                    <polygon points="371,166 490,122 427,231" />
                </svg>
                <div class="brand-title">
                    Bluebook<sup>™</sup>
                </div>
            </div>
        </div>

        <div class="signin-card">
            <h1 class="signin-title">Sign In</h1>

            <button type="button" class="btn-ticket" @click="emit('sign-in-ticket')">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M3 9.5 9.5 3l2.1 2.1a2.2 2.2 0 0 0 3.1 3.1l2.1 2.1-6.5 6.5-2.1-2.1a2.2 2.2 0 0 0-3.1-3.1L3 9.5Z" />
                    <path d="m9 7 8 8" />
                </svg>
                <span>Use a sign-in ticket from your school</span>
            </button>

            <div class="divider">
                <div class="divider-line" />
                <span class="divider-text">OR</span>
                <div class="divider-line" />
            </div>

            <button type="button" class="btn-student" @click="emit('sign-in-student')">
                <span>Sign in with a College Board student account</span>
            </button>

            <a href="#" class="link-educator" @click.prevent="emit('educator-login')">
                I'm an educator
            </a>
            <a href="#" class="link-help" @click.prevent="emit('need-help')">
                Need help signing in?
            </a>
        </div>

        <svg viewBox="0 0 1024 250" preserveAspectRatio="xMidYMax slice" class="bg-illustration">
            <g stroke="#8aa0ee" stroke-width="3" fill="none" opacity="0.30">
                <svg x="0" y="0" width="84" height="84" viewBox="0 0 64 64">
                    <path
                        d="M30 4 L38 27 L60 15 L43 34 L58 54 L36 42 L28 62 L27 39 L4 48 L23 31 L9 9 L30 22 Z"
                        fill="#8aa0ee"
                        opacity="0.30"
                    />
                </svg>
                <g transform="translate(0 74)">
                    <rect x="34" y="28" width="214" height="146" rx="4" />
                    <rect x="62" y="52" width="156" height="106" rx="2" />
                    <rect x="86" y="72" width="110" height="76" rx="3" />
                    <line x1="0" y1="178" x2="278" y2="178" />
                    <rect x="304" y="0" width="132" height="92" rx="8" />
                    <rect x="320" y="18" width="96" height="20" rx="3" />
                    <line x1="320" y1="52" x2="416" y2="52" />
                    <line x1="320" y1="70" x2="388" y2="70" />
                    <circle cx="360" cy="176" r="32" />
                    <line x1="360" y1="176" x2="360" y2="154" />
                    <line x1="360" y1="176" x2="376" y2="166" />
                    <rect x="464" y="112" width="54" height="74" rx="4" />
                    <rect x="474" y="124" width="34" height="14" rx="2" />
                    <g transform="translate(476 148)">
                        <circle cx="0" cy="0" r="3" />
                        <circle cx="14" cy="0" r="3" />
                        <circle cx="28" cy="0" r="3" />
                        <circle cx="0" cy="16" r="3" />
                        <circle cx="14" cy="16" r="3" />
                        <circle cx="28" cy="16" r="3" />
                    </g>
                    <path d="M548 108 Q598 82 648 108 V188 Q598 162 548 188 Z" />
                    <path d="M648 108 Q698 82 748 108 V188 Q698 162 648 188 Z" />
                    <rect x="770" y="106" width="46" height="78" rx="2" />
                    <line x1="816" y1="158" x2="870" y2="104" />
                    <rect x="780" y="116" width="26" height="22" />
                    <path d="M852 104 884 136" />
                    <rect x="842" y="90" width="154" height="96" rx="3" />
                    <path d="M866 90 Q919 26 972 90" />
                    <line x1="919" y1="46" x2="919" y2="90" />
                    <rect x="888" y="126" width="24" height="60" rx="12" />
                    <rect x="862" y="108" width="18" height="22" />
                    <rect x="958" y="108" width="18" height="22" />
                </g>
                <path d="M944 73 Q958 47 982 58 Q995 32 1019 54 Q1045 50 1054 76" />
                <path d="M754 116 Q766 101 778 116" />
            </g>
        </svg>

        <div class="version-label">VSN-1.0.0 SAT Bluebook</div>
    </div>
</template>

<style scoped>
.bluebook-login,
.bluebook-login * {
    box-sizing: border-box;
}

.bluebook-login {
    position: fixed;
    inset: 0;
    background-color: rgb(50, 77, 199);
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    overflow: hidden;
    color: rgb(0, 0, 0);
}

.test-device-wrapper {
    position: absolute;
    top: 10px;
    right: 40px;
    z-index: 2;
}

.test-device-btn {
    width: 180px;
    height: 53px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.85);
    background-color: rgba(255, 255, 255, 0.3);
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: inherit;
    line-height: 1.2;
}

.test-device-btn svg {
    flex-shrink: 0;
}

.brand-wrapper {
    position: absolute;
    top: 75px;
    left: 50%;
    transform: translateX(calc(-50% - 7.5px));
    z-index: 1;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgb(255, 255, 255);
    user-select: none;
}

.brand-logo svg {
    display: block;
    flex-shrink: 0;
}

.brand-title {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -0.5px;
    line-height: 1;
    color: rgb(255, 255, 255);
}

.brand-title sup {
    font-size: 11px;
    margin-left: 3px;
    vertical-align: top;
}

.signin-card {
    position: absolute;
    left: 50%;
    transform: translateX(calc(-50% - 7.5px));
    top: 152px;
    width: 456px;
    height: 386px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 22px;
    z-index: 2;
    color: rgb(0, 0, 0);
}

.signin-title {
    position: absolute;
    top: 34px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 28px;
    line-height: 1;
    font-weight: 600;
    margin: 0;
    color: rgb(0, 0, 0);
}

.btn-ticket {
    position: absolute;
    top: 98px;
    left: 30px;
    right: 30px;
    height: 48px;
    border-radius: 999px;
    border: 1.4px solid rgb(0, 0, 0);
    background-color: rgb(255, 216, 12);
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: inherit;
    line-height: 1.2;
}

.btn-ticket svg,
.btn-ticket span {
    color: rgb(0, 0, 0);
    flex-shrink: 0;
}

.divider {
    position: absolute;
    top: 173px;
    left: 30px;
    right: 30px;
    height: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.divider-line {
    flex: 1 1 0%;
    height: 1px;
    background-color: rgb(218, 218, 218);
}

.divider-text {
    font-size: 16px;
    line-height: 20px;
    color: rgb(68, 68, 68);
}

.btn-student {
    position: absolute;
    top: 218px;
    left: 30px;
    right: 30px;
    height: 48px;
    border-radius: 999px;
    border: 1.4px solid rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-size: 14.5px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    line-height: 1.2;
}

.btn-student span {
    color: rgb(0, 0, 0);
}

.link-educator,
.link-help {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    color: rgb(50, 77, 199);
    text-decoration: underline;
    background: transparent;
}

.link-educator {
    top: 303px;
}

.link-help {
    top: 334px;
}

.bg-illustration {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 220px;
    pointer-events: none;
}

.version-label {
    position: absolute;
    right: 6px;
    bottom: 4px;
    color: rgba(255, 255, 255, 0.75);
    font-size: 11px;
    font-family: monospace;
    padding: 4px 6px;
    z-index: 2;
}
</style>