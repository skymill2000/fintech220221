from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.eum.go.kr/web/am/amMain.jsp;')
# naver 페이지 열기

sidoSelect = Select(driver.find_element_by_xpath('//*[@id="selSido"]'))
sidoSelect.select_by_visible_text("전라남도")
driver.implicitly_wait(1)

gun = Select(driver.find_element_by_xpath(
    '//*[@id="selSgg"]'))
gun.select_by_visible_text("고흥군")

driver.implicitly_wait(1)

dong = Select(driver.find_element_by_xpath(
    '//*[@id="selUmd"]'))
dong.select_by_visible_text('고흥읍')

driver.implicitly_wait(1)

ri = Select(driver.find_element_by_xpath(
    '//*[@id="selRi"]'))
ri.select_by_visible_text('남계리')

bobn = driver.find_element_by_xpath(
    '//*[@id="bobn"]')
bubn = driver.find_element_by_xpath(
    '//*[@id="bubn"]')

bobn.send_keys('45')
bubn.send_keys('1')

button = driver.find_element_by_xpath(
    '//*[@id="frm"]/fieldset/div[3]/p/span/a')
button.click()

price = driver.find_element_by_xpath(
    '//*[@id="appoint"]/div[2]/table/tbody/tr[3]/td')
print(price.text)
