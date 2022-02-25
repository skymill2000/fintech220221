from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://zdnet.co.kr/view/?no=20211018152458')
# naver 페이지 열기

# /html/body/div[5]/div[1]/div[1]/div/div/div[1]/h1
title = driver.find_element_by_xpath(
    '/html/body/div[5]/div[1]/div[1]/div/div/div[1]/h1')
print(title.text)

summary = driver.find_element_by_xpath(
    '/html/body/div[5]/div[1]/div[1]/div/div/div[1]/p[1]')
print(summary.text)
