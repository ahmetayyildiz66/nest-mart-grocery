<template>
  <footer class="mx-40 mt-24 pb-20">
    <div class="flex">
      <div>
        <img src="../assets/logo.png" alt="Nest Mart & Grocery" />
        <div class="flex items-baseline mt-[75px] text-blue-950">
          <IconLocation :fill="'#3BB77E'" />
          <p class="flex w-[320px] ml-3">
            <span class="font-bold">Address:</span>
            <span class="ml-1">5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
          </p>
        </div>
        <div class="flex items-baseline mt-4">
          <IconHeadset :fill="'#3BB77E'" :width="16" :height="16" />
          <p class="flex w-[320px] ml-3">
            <span class="font-bold">Call Us:</span>
            <span class="ml-1">(+91) - 540-025-124553</span>
          </p>
        </div>
        <div class="flex items-baseline mt-4">
          <IconPaperPlane :fill="'#3BB77E'" :width="20" :height="20" />
          <p class="flex w-[320px] ml-3">
            <span class="font-bold">Email:</span>
            <span class="ml-1">contact@nestmart.com</span>
          </p>
        </div>
        <div class="flex items-baseline mt-4">
          <IconTimer />
          <p class="flex w-[320px] ml-3">
            <span class="font-bold">Hours:</span>
            <span class="ml-1">10:00 - 18:00, Mon - Sat </span>
          </p>
        </div>
      </div>
      <div class="flex flex-col ml-20">
        <h4 class="text-2xl font-bold">Company</h4>
        <ul class="mt-8 space-y-4">
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
          <li>Support Center</li>
          <li>Careers</li>
        </ul>
      </div>
      <div class="flex flex-col ml-20">
        <h4 class="text-2xl font-bold">Account</h4>
        <ul class="mt-8 space-y-4">
          <li>Sign In</li>
          <li>View Cart</li>
          <li>My Wishlist</li>
          <li>Track My Order</li>
          <li>Help Ticket</li>
          <li>Shipping Details</li>
          <li>Compare products</li>
        </ul>
      </div>
      <div class="flex flex-col ml-20">
        <h4 class="text-2xl font-bold">Information</h4>
        <ul class="mt-8 space-y-4">
          <li>Search Terms</li>
          <li>Advanced Search</li>
          <li>Help & FAQ's</li>
          <li>Store Location</li>
          <li>Orders & Returns</li>
          <li>Feedback for us</li>
        </ul>
      </div>
    </div>
    <div class="mt-10 flex justify-between border-t pt-5 border-green-750">
      <p>© 2021, <span class="text-green-750">NestMart</span> - HTML Ecommerce Template </p>
      <p>Designed by <span class="text-green-750">Alithemes.com</span>. All rights reserved </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import IconLocation from '@/components/icons/IconLocation.vue'
import IconHeadset from '@/components/icons/IconHeadset.vue'
import IconPaperPlane from '@/components/icons/IconPaperPlane.vue'
import IconTimer from '@/components/icons/IconTimer.vue'
</script>
