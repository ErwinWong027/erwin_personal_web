#!/bin/bash

# PDF 转 JPG 批量转换脚本
# 使用 ImageMagick 的 convert 命令

CERT_DIR="./public/奖状证书"

echo "🎨 开始转换 PDF 证书为 JPG 图片..."
echo ""

# 需要转换的 PDF 文件列表
PDF_FILES=(
  "三创校特等奖.pdf"
  "互联网 + 获奖证书.pdf"
  "品牌策划大赛新加坡中国一等奖.pdf"
  "商业精英挑战赛新加坡总决赛全国一等奖.pdf"
  "关于 2021 年大学生创新创业训练计划项目推荐国家级的公示.pdf"
  "结题证书（修改后）.pdf"
  "校先进个人和志愿者.pdf"
  "河南大创.pdf"
)

SUCCESS_COUNT=0
FAIL_COUNT=0

for pdf in "${PDF_FILES[@]}"; do
  pdf_path="$CERT_DIR/$pdf"
  
  if [ -f "$pdf_path" ]; then
    # 移除 .pdf 扩展名
    base_name="${pdf%.pdf}"
    output_path="$CERT_DIR/${base_name}.jpg"
    
    echo "📄 转换：$pdf -> ${base_name}.jpg"
    
    # 使用 convert 转换 PDF 第一页为 JPG，设置分辨率为 300 DPI
    # [0] 表示只转换第一页
    convert -density 300 "${pdf_path}[0]" -quality 90 "${output_path}" 2>/dev/null
    
    if [ $? -eq 0 ] && [ -f "$output_path" ]; then
      echo "✅ 成功：${base_name}.jpg"
      ((SUCCESS_COUNT++))
    else
      echo "❌ 失败：$pdf"
      ((FAIL_COUNT++))
    fi
  else
    echo "⚠️  文件不存在：$pdf_path"
  fi
  
  echo ""
done

echo "================================"
echo "转换完成！"
echo "成功：$SUCCESS_COUNT 个"
echo "失败：$FAIL_COUNT 个"
echo "================================"
