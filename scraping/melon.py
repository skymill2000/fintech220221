from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.melon.com/chart/index.htm')
# naver 페이지 열기

# /html/body/div[5]/div[1]/div[1]/div/div/div[1]/h1
table = driver.find_element_by_xpath(
    '//*[@id="frm"]/div/table/tbody')
# //*[@id="frm"]/div/table
tableRow = table.find_elements_by_tag_name('tr')
for index, row in enumerate(tableRow):
    print(index)
    songTitle = row.find_elements_by_tag_name('td')[5]
    print(songTitle.text)
