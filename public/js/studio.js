const ideaInput = document.querySelector('#ideaInput');
const promptOutput = document.querySelector('#promptOutput');
const resultPanel = document.querySelector('#resultPanel');
const insights = document.querySelector('#insights');
let format = '9:16';

const negative = 'biến đổi khuôn mặt, không giống bản gốc, khuôn mặt kiểu AI, da như nhựa, da quá mịn, bộ lọc làm đẹp, mắt biến dạng, bàn tay lỗi, thừa ngón tay, giải phẫu cơ thể sai lệch, chủ thể bị lặp lại, văn bản ngẫu nhiên, watermark, logo, CGI, nền lộn xộn, ánh sáng không đồng nhất, phối cảnh sai, khung hình bị cắt cụt';

function makeBrief(idea) {
  const subject = idea || 'một khoảnh khắc đời thường có chủ thể rõ nét và câu chuyện thị giác giàu cảm xúc';
  const prompt = `Tạo một hình ảnh chất lượng cao về ${subject}, trong một bối cảnh chân thực, giàu chi tiết và có chiều sâu, với ánh sáng tự nhiên mềm mại, góc máy ngang tầm mắt, bố cục gọn gàng tập trung vào chủ thể, tâm trạng chân thật và đầy chủ đích, chỉnh màu trung tính ấm nhẹ.

Khung cảnh cần gợi lên cảm giác tự do, tò mò và một khởi đầu mới. Bao gồm trang phục phù hợp với bối cảnh, chất liệu vải tự nhiên, các yếu tố nền vừa đủ để kể chuyện nhưng không làm phân tán sự chú ý. Giữ nguyên chủ thể, nhân vật, trang phục, bối cảnh và ánh sáng xuyên suốt.

Sử dụng tỷ lệ thực tế, kết cấu tự nhiên, lỗ chân lông hiện rõ, không skin smoothing, không beautify filter; ảnh chụp candid bằng camera trong đời sống. Chuyển động video đề xuất: camera dolly-in chậm, chủ thể hít thở và chuyển ánh nhìn tự nhiên, môi trường có gió nhẹ; không đổi nhân dạng hoặc chuyển cảnh đột ngột.

Tỷ lệ khung hình: ${format}. Phong cách: chân thật, chụp bằng camera trong cuộc sống đời thường. Chất lượng: độ phân giải siêu cao, chi tiết, chuyên nghiệp, chủ thể sắc nét.`;
  return { subject, prompt };
}
function generate() {
  const brief = makeBrief(ideaInput.value.trim());
  insights.innerHTML = [
    ['CẢM XÚC', 'Tự do · chân thật · đầy khởi đầu'],
    ['HOOK 3 GIÂY', 'Ánh nhìn và một chi tiết chuyển động tự nhiên'],
    ['STOP-SCROLL', 'Chủ thể sắc nét trên nền có chiều sâu'],
    ['CHUYỂN ĐỘNG', 'Dolly-in chậm · gió nhẹ · ánh nhìn tự nhiên']
  ].map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join('');
  promptOutput.value = brief.prompt;
  document.querySelector('#negativeOutput').textContent = negative;
  resultPanel.classList.remove('hidden');
  resultPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.querySelector('#generateButton').addEventListener('click', generate);
ideaInput.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') generate(); });
document.querySelectorAll('.format').forEach((button) => button.addEventListener('click', () => { document.querySelector('.format.active').classList.remove('active'); button.classList.add('active'); format = button.dataset.format; }));
document.querySelector('#resetButton').addEventListener('click', () => { ideaInput.value = ''; promptOutput.value = ''; resultPanel.classList.add('hidden'); ideaInput.focus(); });
document.querySelector('#copyButton').addEventListener('click', async () => { await navigator.clipboard.writeText(promptOutput.value); document.querySelector('#copyButton').textContent = 'Đã sao chép ✓'; setTimeout(() => document.querySelector('#copyButton').textContent = 'Sao chép prompt', 1800); });
document.querySelector('#imageUpload').addEventListener('change', (event) => { const file = event.target.files[0]; if (!file) return; document.querySelector('#uploadIcon').textContent = '✓'; document.querySelector('#uploadTitle').textContent = file.name; document.querySelector('#uploadHint').textContent = 'Ảnh đã sẵn sàng để phân tích'; });
