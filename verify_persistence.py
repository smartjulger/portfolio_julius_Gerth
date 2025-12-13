
from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # 1. Go to index.html
    page.goto("http://localhost:8000/index.html")
    # Clear local storage to ensure a clean test
    page.evaluate("localStorage.clear()")
    page.reload()
    time.sleep(1) # wait for page to reload
    page.screenshot(path="/home/jules/verification/persistence_1_english_default.png")

    # 2. Click translate button to switch to Dutch
    page.click("button#translate-btn")
    time.sleep(1) # wait for translation to apply
    page.screenshot(path="/home/jules/verification/persistence_2_dutch_index.png")

    # 3. Navigate to projects.html
    page.click("a[href='projects.html']")
    time.sleep(1) # wait for page to load
    page.screenshot(path="/home/jules/verification/persistence_3_dutch_projects.png")

    # 4. Navigate back to index.html
    page.click("a[href='index.html']")
    time.sleep(1) # wait for page to load
    page.screenshot(path="/home/jules/verification/persistence_4_dutch_index_return.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
