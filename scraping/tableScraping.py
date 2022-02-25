from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.alimi.or.kr/dataview/a/selectDsFacilities.do')
# naver 페이지 열기

table = driver.find_element_by_xpath(
    '//*[@id="list"]/tbody/tr[3]/td/table/tbody')
tableRow = table.find_elements_by_tag_name('tr')
for index, row in enumerate(tableRow):
    if index > 1:
        address = row.find_elements_by_tag_name('td')[4]
        print(address.text)
        percent = row.find_elements_by_tag_name('td')[5]
        print(percent.text)
