
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000/index.html")
    page.screenshot(path="/home/jules/verification/english_index_fix.png")
    page.click("button#translate-btn")
    page.screenshot(path="/home/jules/verification/dutch_index_fix.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
