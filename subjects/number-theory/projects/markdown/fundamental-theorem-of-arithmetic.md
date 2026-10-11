# Fundamental theorem of arithmetic

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** NT-02  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Prove that every integer $n\ge 2$ is a product of primes, uniquely up to the order of the factors.

**Foundations and permitted imports:**

Integers, divisibility, primes, and strong induction are foundational. Import NT-01: for integers u,v not both zero, gcd(u,v)=ru+sv for some integers r,s. In particular a prime p not dividing u has gcd(p,u)=1. No unique-factorization statement is imported.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Prime factorization exists
N2 [v1] Euclid’s lemma
N3 [v1] Factorization is unique
  N1 -- E1: Every integer n≥2 has a finite prime factorization. --> N3
  N2 -- E2: For prime p, p|uv implies p|u or p|v. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-3 | N1/v1, E1 | Every integer n≥2 has a finite prime factorization. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | For prime p, p|uv implies p|u or p|v. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Prime factorization exists

**Object, role, and local target:** Reduce a composite number to two strictly smaller factors. The required export is: Every integer n≥2 has a finite prime factorization.

**Inputs:** n≥2; strong induction; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-02.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain n≥2; strong induction; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Reduce a composite number to two strictly smaller factors. |
| Sense | The unit 1 is excluded; it is not a prime factor. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** Every integer n≥2 has a finite prime factorization. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Euclid’s lemma

**Object, role, and local target:** Use a coprimality certificate rather than factorization. The required export is: For prime p, p|uv implies p|u or p|v.

**Inputs:** p prime; p divides uv; Bézout NT-01; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-02.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain p prime; p divides uv; Bézout NT-01; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Use a coprimality certificate rather than factorization. |
| Sense | 6 divides 2·3 but divides neither factor; primality is essential. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** For prime p, p|uv implies p|u or p|v. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Factorization is unique

**Object, role, and local target:** Match one prime and cancel in the integers. The required export is: Prime factorization exists and is unique up to permutation, including multiplicities.

**Inputs:** Two finite prime products for n; Euclid’s lemma; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-02.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Two finite prime products for n; Euclid’s lemma; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Match one prime and cancel in the integers. |
| Sense | Cancellation is an integer equality; do not use modular cancellation here. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Prime factorization exists and is unique up to permutation, including multiplicities. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Prime factorization exists

1. Induct strongly on n.

2. The base 2 is prime.

3. If n is prime its one-factor expression suffices.

4. Otherwise n=ab with 1<a,b<n.

5. By the induction hypothesis a and b are products of primes; concatenate these finite products.

6. The induction decreases the integer input, so it does not assume the desired result at the same n.

### §4.N2 — Euclid’s lemma

1. If p divides u there is nothing to show.

2. Otherwise gcd(p,u)=1, so rp+su=1.

3. Multiply by v: rpv+suv=v.

4. Both terms on the left are divisible by p; consequently p divides v.

5. Repeated application shows that a prime dividing a finite product divides one factor.

### §4.N3 — Factorization is unique

1. Suppose p₁⋯p_r=q₁⋯q_s.

2. Euclid’s lemma gives p₁|q_j for some j; since q_j is prime and p₁>1, p₁=q_j.

3. Move that factor first and cancel this nonzero integer on both sides.

4. Repeat on the smaller remaining product.

5. If one list exhausts before the other, the remaining nonempty prime product would equal 1, impossible.

6. Thus r=s and the multisets agree.

7. Together with existence this proves the theorem.

## 5. Worked instance and boundary audit

360=36·10=(2·3)²·(2·5)=2³3²5. Any competing prime product for 360 must contain 2 by Euclid’s lemma. Cancel three copies successively, then two copies of 3 and one of 5; the remaining product is 1. This witnesses the matching process, while the induction proves all inputs.

**Boundary or failed-argument audit:**

At n=2 the existence and uniqueness arguments close with one factor. The integer 1 has an empty product convention but is outside the stated theorem. A composite “prime-divisor agent” exporting 6|uv⇒6|u or6|v is rejected by u=2,v=3; restore primality, increment that node’s version, and recheck uniqueness.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `NT-02`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
