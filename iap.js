export async function initIAP() {
  console.log("IAP init");
}
export async function buyUnlock() {
  alert("Simulated purchase: unlocked!");
}
export async function checkUnlock() {
  return false; // always locked on GitHub demo
}
export function enableBabyLock() {
  alert("Simulated baby lock enabled.");
}
